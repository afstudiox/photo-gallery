import { useState, useEffect, FormEvent } from 'react'
import * as C from './App.styles';
import * as Photos from './services/photos'
import { Photo } from './types/photo'
import { PhotoItem } from './Components/PhotoItem'

const App = () => {
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [photo, setPhotos] = useState<Photo[]>([]);
  const [fileInputValue, setFileInputValue] = useState('');
  
  // ao carregar a página, buscar as fotos
  useEffect(() => {
    const getPhotos =async () => {
      setLoading(true);
       setPhotos(await Photos.getAll());
      setLoading(false);
    }
    getPhotos();
  }, []);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get('image') as File;
    if(file && file.size > 0) {
      setUploading(true);
      let result = await Photos.insert(file);
      setUploading(false);

      if (result instanceof Error) {
        alert(`${result.name} - ${result.message}`);
        setFileInputValue('');
      } else {
        let newPhotoList = [...photo];
        newPhotoList.push(result);
        setPhotos(newPhotoList);
        setFileInputValue('');
      }
    }
  }

  const handleDelete = async (imageName: string) => {
    // Chama a função de exclusão da foto
    await Photos.remove(imageName);
    
    // Atualiza a lista de fotos após a exclusão
    setPhotos(await Photos.getAll());
  };


  return (
    <C.Container>
      <C.Area>
        <C.Header>Galeria de Fotos</C.Header>

        {/* Área de Upload */}
        <C.UploadForm method="POST" onSubmit={handleFormSubmit}>
          <input 
            type="file" 
            name="image" 
            value={fileInputValue} 
            onChange={(e) => setFileInputValue(e.target.value)}
          />
          <input type="submit" value="Enviar" />
          { uploading && 'Enviando...'}

        </C.UploadForm>

        {/* Lista de Fotos  */}
        {loading &&
          <C.ScreenWarning>
            <div className="emoji">⏳</div>
            <div>Carregando...</div>
          </C.ScreenWarning>
        }
        {!loading && photo.length > 0 &&
          <C.PhotoList>
            {photo.map((item, index) => (
              <PhotoItem key={index} url={item.url} name={item.name} onDelete={handleDelete}/>
            ))}
          </C.PhotoList>
        }

        {!loading && photo.length === 0 &&
          <C.ScreenWarning>
            <div className="emoji">😕</div>
            <div>Não há fotos cadastradas.</div>
          </C.ScreenWarning>
        }
      </C.Area>
    </C.Container>  
  )
}

export default App;
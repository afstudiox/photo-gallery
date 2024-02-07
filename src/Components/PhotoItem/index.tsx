import * as C from './styles';


type Props = {
    url: string;
    name: string;
    onDelete: (name: string) => void;
};

export const PhotoItem = ({ url, name, onDelete }: Props) => {
    const handleDelete = async () => {
        if(window.confirm('Tem certeza que deseja excluir?')) {
            onDelete(name);
        }
    }
    return (
        <C.Container>
            <img src={url} alt={name} />
            {name}
            <C.ControlContainer>
                <C.ControlButton onClick={handleDelete}>x</C.ControlButton>
            </C.ControlContainer>
        </C.Container>
    );
}
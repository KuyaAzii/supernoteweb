import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
const Note = ({ id, text, date, handleDeleteNote, handleEditNote }) => {
	return (
		<div className='note'>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<EditIcon
					onClick={() => handleEditNote(id)}
					className='Edit-icon'
					size='1.3em'
				/>
				<DeleteForeverIcon
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
		</div>
	);
};



export default Note;

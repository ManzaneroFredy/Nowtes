interface CreateNoteDto {
  title: string;
  description: string;
  priority: string;
  deadline: Date;
  userId: string;
}

export default CreateNoteDto;

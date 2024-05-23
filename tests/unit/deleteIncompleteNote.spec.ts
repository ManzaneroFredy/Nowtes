/*
import { DeleteNote } from '@/domain/usesCases/deleteIncompleteNote';
import Note from '@/domain/entities/Note';

// Crear mocks de las funciones
const mockNoteRepository = () => ({
    saveNote: jest.fn(),
    deleteNoteById: jest.fn(),
    editNote: jest.fn()
  });
  
  const mockUserNotesRepository = () => ({
    findById: jest.fn(),
    findByTitle: jest.fn(),
    findByPriority: jest.fn(),
    getAll: jest.fn()
  });
  
  describe('DeleteNote', () => {
    let noteRepository: ReturnType<typeof mockNoteRepository>;
    let userNotesRepository: ReturnType<typeof mockUserNotesRepository>;
    let deleteNote: DeleteNote;
  
    beforeEach(() => {
      noteRepository = mockNoteRepository();
      userNotesRepository = mockUserNotesRepository();
      deleteNote = new DeleteNote(noteRepository, userNotesRepository);
    });
  
    test('should throw an error if the note does not exist', async () => {
      userNotesRepository.findById.mockResolvedValue(null);
  
      await expect(deleteNote.deleteNote('1')).rejects.toThrow('No se encontró la nota para eliminar.');
  
      expect(userNotesRepository.findById).toHaveBeenCalledWith('1');
      expect(noteRepository.deleteNoteById).not.toHaveBeenCalled();
    });
  
    test('should throw an error if the note is in progress', async () => {
      const note = new Note(
        1,
        'Test Title',
        'Test Body',
        'En progreso',
        '2024-12-31'
      );
  
      userNotesRepository.findById.mockResolvedValue(note);

    // Logging to debug the status of the note
    console.log('Note status:', note.getStatus());
  
      await expect(deleteNote.deleteNote(note.getId().toString())).rejects.toThrow("No se puede eliminar una nota en progreso.");
  
      expect(userNotesRepository.findById).toHaveBeenCalledWith('1');
      expect(noteRepository.deleteNoteById).not.toHaveBeenCalled();
    });
  
    test('should delete the note if it is not in progress', async () => {
      const note = new Note(
        1,
        'Test Title',
        'Test Body',
        'Terminado',
        '2024-12-31'
      );
  
      userNotesRepository.findById.mockResolvedValue(note);

    // Logging to debug the status of the note
    console.log('Note status:', note.getStatus());
  
      await deleteNote.deleteNote('1');
  
      expect(userNotesRepository.findById).toHaveBeenCalledWith('1');
      expect(noteRepository.deleteNoteById).toHaveBeenCalledWith('1');
    });
  });
  */
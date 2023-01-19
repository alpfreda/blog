import { createEntityAdapter } from '@reduxjs/toolkit'
import { enhancedApi } from '../../app/api'

const notesAdapter = createEntityAdapter()
const initialState = notesAdapter.getInitialState()

export const extendedApiSlice = enhancedApi.injectEndpoints({
  tagTypes: ['Time'],
  endpoints: builder => ({
    getNotes: builder.query({
      query: (query) => `/kiosk/notes${parseObjectTypeQuery(query)}`,
      transformResponse: responseData => {
        return notesAdapter.setAll(initialState, responseData)
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled
        } catch (error) {
          dispatch(addNotification({ ...errorHelper({ code: 'NOTES', error }), invalidateTags: ['NotesApi'] }))
        }
      },
      providesTags: ['NotesApi'],
    }),
    getNote: builder.query({
      query: (id) => `/notes/${id}`,
      providesTags: (result, error, id) => [{ type: 'NotesApi', id }],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled
        } catch (error) {
          dispatch(addNotification(errorHelper({ code: 'NOTES', error })))
        }
      },
    }),
    createNote: builder.mutation({
      query(data) {
        return {
          url: `/notes`,
          method: 'POST',
          body: data
        }
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        await queryStartedActionForUpdateNote(dispatch, queryFulfilled, SUCCESS_MESSAGES.NOTE_SUCCESS_MESSAGE)
      },
      invalidatesTags: ['NotesApi'],
    }),
    editNote: builder.mutation({
      query(data) {
        return {
          url: `/notes/${data.id}`,
          method: 'PUT',
          body: data
        }
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        await queryStartedActionForUpdateNote(dispatch, queryFulfilled, SUCCESS_MESSAGES.NOTE_EDIT_SUCCESS_MESSAGE)
      },
      invalidatesTags: ['NotesApi'],
    }),
    deleteNote: builder.mutation({
      query(data) {
        return {
          url: `/notes/${data.id}`,
          method: 'DELETE',
          body: data
        }
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        await queryStartedActionForUpdateNote(dispatch, queryFulfilled, SUCCESS_MESSAGES.NOTE_DELETE_SUCCESS_MESSAGE)
      },
      invalidatesTags: ['NotesApi'],
    })
  })
})

const queryStartedActionForUpdateNote = async (dispatch, queryFulfilled, successMessage) => {
  try {
    await queryFulfilled
    dispatch(addNotification({ type: 'success', code: Math.random(), message: successMessage, multiLanguage: true }))
  } catch (error) {
    dispatch(addNotification(errorHelper({ code: Math.random(), error })))
  }
}

export const {
  useGetNotesQuery,
  useGetNoteQuery,
  useCreateNoteMutation,
  useEditNoteMutation,
  useDeleteNoteMutation
} = extendedApiSlice
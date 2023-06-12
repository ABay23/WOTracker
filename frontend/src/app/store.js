import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../components/features/auth/authSlice'
import ticketReducer from '../components/features/tickets/ticketSlice'
import noteReducer from '../components/features/notes/noteSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tickets: ticketReducer,
    notes: noteReducer,
  },
})

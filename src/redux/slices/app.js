import { createSlice } from '@reduxjs/toolkit';
import { dispatch } from '../store';

const initialState = {
  sidebar: {
    open: false,
    type: 'CONTACT' // CONTACT, STARRED, SHARED
  }
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // toggle sidebar
    toggleSidebar: (state, action) => {
      state.sidebar.open = !state.sidebar.open;
    },
    // set sidebar type
    setSidebarType: (state, action) => {
      state.sidebar.type = action.payload.type;
    }
  }
});

export default slice.reducer;

export function ToggleSidebar() {
  return async () => {
    dispatch(slice.actions.toggleSidebar());
  };
}

export function SetSidebarType(type) {
  return async () => {
    dispatch(slice.actions.setSidebarType({ type }));
  };
}

import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../redux';

export const useTypedSeletor: TypedUseSelectorHook<RootState> = useSelector;

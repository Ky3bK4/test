import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchAllProducts} from "../app/shopSlice";

export const useFetchProducts = (dep) => {
  const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(fetchAllProducts())
    },[dispatch, dep])
}
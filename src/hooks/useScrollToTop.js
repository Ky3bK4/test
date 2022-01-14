import {useEffect} from "react";

export const useScrollToTop = (dep) => {
  useEffect(()=> {
    window.scroll({
      top:0,
      behavior: 'smooth'
    })
  },[dep])
}
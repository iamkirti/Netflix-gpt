import { useDispatch } from "react-redux";
import {API_OPTIONS} from "../utils/constants"
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer=(movieId)=>{

    const dispatch = useDispatch();
    // const [trailerId,setTrailerId]=useState(null);
  
    //fetch trailer video && updating the store with trailer video data
    const getMovieVideos = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
      console.log(json);
      const filterdata = json.results.filter((video) => video.type === "Trailer");
      console.log(filterdata[0]);
  
      const trail = filterdata.length ? filterdata[0] : json.results[0];
      console.log(trail);
      // setTrailerId(trail.key)
      dispatch(addTrailerVideo(trail));
  
      //console.log("trailerVideo", trailerVideo);
    };
  
    useEffect(() => {
      getMovieVideos();
    }, []);

}

export default useMovieTrailer;
export default function useLocalStorage(){
    function getWatched() {
        if (typeof window !== 'undefined') {
          let watched = localStorage.getItem('watched');
          if (watched !== null) {
            let result = JSON.parse(watched);
            return result.watched;
          }
          return null;
        }
        return null;
      }
      function setWatchedId({
        id,
        poster_path
      }: any) {
        if (typeof window !== 'undefined') {
          // let watched = localStorage.getItem('watched');
            let info: any = {
              id,
              poster_path
            };
            let toSave = {
              watched: {
                [id]: info,

              },
            };
            console.log(toSave);
            localStorage.setItem('watched', JSON.stringify(toSave));
          // if (watched) {
          //   let result = JSON.parse(watched);
          //   if (result.watched[id]) {
          //     let toSave: any = result.watched[id];
              
          //       //   toSave.chapterId = chapterId;
          //       //   result.watched[anislistId] = toSave;
          //       //   localStorage.setItem('watched', JSON.stringify(result));
          //       // }
          //       // console.log(watched);
          //     } else {
          //       let toSave: any = {
          //         id,
          //         poster_path
          //       };
          //       result.watched[id] = toSave;
                
          //     localStorage.setItem('watched', JSON.stringify(result));
          //   }
          // } else {
          //   console.log(id);
          //   let info: any = {
          //     id,
          //     poster_path
          //   };
          //   let toSave = {
          //     watched: {
          //       [id]: info,

          //     },
          //   };
          //   // console.log(toSave);
          //   localStorage.setItem('watched', JSON.stringify(toSave));
          // }
        }
      }
    return {
        setWatchedId,
        getWatched
    }
}
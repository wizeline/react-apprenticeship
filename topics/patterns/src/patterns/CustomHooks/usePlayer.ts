const list = ['Anand', "Carlsen", "Kasparov", "Kramnik", "Capablanca"];

const usePlayer = (): string => {

  function getRandomItem(){
    const length = list.length;
   return  Math.floor(Math.random() * length);
  }

    return list[getRandomItem()];
}

export default usePlayer;
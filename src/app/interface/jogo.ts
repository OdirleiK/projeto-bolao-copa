export interface Jogo {
  id: number;
  data: Date;
  time1: {
    id: number;
    time: String;
    grupo: String;
    img: String;
  }
  time2: {
    id: number;
    time: String;
    grupo: String;
    img: String;
  }
}

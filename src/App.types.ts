export type TTask = {
  id: number;
  heading: string;
};

export type TCard = {
  id: number;
  title: string;
  tasks: TTask[];
};

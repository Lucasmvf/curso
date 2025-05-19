import { Comment } from './Comment';


// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ICommentsProps {
  //children: React.ReactNode;
}
export const Comments = ({ }: ICommentsProps) => {

  return (
    <div className='flex gap-2 flex-col'>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};
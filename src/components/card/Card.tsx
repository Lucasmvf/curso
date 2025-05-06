import Image from 'next/image';
import Link from 'next/link';

interface ICardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

export const Card = ({ title, description, image, href }: ICardProps) => {

  return (
    <Link href={href} className='hover:no-underline'>
      <article className='flex gap-2 flex-col p-2 rounded sm:hover:bg-primary'>
        <Image
          height={640}
          width={480}
          draggable={false}
          alt={title}
          className='aspect-video object-cover rounded-2xl'
          src={image}
        />

        <h4 className='font-extrabold text-lg'>
          {title}
        </h4>

        <p className='line-clamp-3'>
          {description}
        </p>
      </article>
    </Link>
  );
};
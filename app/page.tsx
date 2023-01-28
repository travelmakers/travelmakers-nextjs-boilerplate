import { Container } from './styles';

interface DataProps {
  title: string;
  description: string;
  ingredients: string[];
  image: string;
  id: number;
}
async function getData() {
  const res = await fetch('https://api.sampleapis.com/coffee/hot');
  return res.json();
}

const Page = async () => {
  const data: DataProps[] = await getData();

  const Coffee = () => (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );

  return (
    <Container>
      <Coffee />
    </Container>
  );
};

export default Page;

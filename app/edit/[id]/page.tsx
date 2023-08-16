interface Props {
  params: {
    id: string;
  };
}

export default function page({ params }: Props) {
  return (
    <div>
      <h1>Editing task {params.id}</h1>
    </div>
  );
}

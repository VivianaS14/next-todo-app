import NewFormPage from "@/app/new/page";

interface Props {
  params: {
    id: string;
  };
}

export default function page({ params }: Props) {
  return <NewFormPage paramId={params.id} />;
}

import Head from "next/head";
import { useRouter } from "next/router";
import type { FC } from "react";
import BusinessCard from "../../components/BusinessCard/BusinessCard";
import { trpc } from "../../utils/trpc";

const Slug: FC = ({}) => {
  const router = useRouter();
  const { slug } = router.query;

  if (typeof slug !== "string") return null;

  const { data: card } = trpc.card.getCard.useQuery({ slug });

  return (
    <div className="from- absolute inset-0 grid place-items-center bg-gradient-to-br from-rose-500 to-purple-600">
      <Head>
        <title>
          {card?.name} | {card?.title}
        </title>
      </Head>
      <BusinessCard card={card} />
    </div>
  );
};

export default Slug;

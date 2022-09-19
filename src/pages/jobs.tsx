import type { NextPage } from "next";
import Head from "next/head";
import PostingCard from "../components/PostingCard";
import Search from "../components/Search";
import Sidebar from "../components/Sidebar";
import { trpc } from "../utils/trpc";
//import { Posting } from '../types/Posting';

const Jobs: NextPage = () => {
  const postings = trpc.useQuery(["jobs.getAll"]);

  return (
    <>
      <Head>
        <title>Junior.Dev - Entry Level Jobs</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <section>
            <Search />
            <div className="">
              <div className="flex flex-wrap justify-center md:justify-start">
                {
                  postings.data?.map((p) => (
                    <PostingCard
                      key={p.id}
                      id={p.id}
                      employer={p.employer}
                      employerIng={p.employerImg}
                      location={p.location}
                      title={p.title}
                      type={p.type}
                      level={p.level}
                      salary={p.salary}
                      description={p.description}
                      skills={p.skills}
                      createdAt={p.createdAt}
                    />
                  ))
                }
              </div>
            </div>
        </section>
      </main>
    </>
  );
};

export default Jobs;

import type { NextPage } from "next";
import React, { useEffect, useState} from "react";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { trpc } from "../utils/trpc";
import { useRouter } from "next/router";
import Search from "../components/Search";
import SkillsList from "../components/SkillsList";
import BackButton from "../components/BackButton";

const JobPage: NextPage = () => {
  const [description, setDescription] = useState("");

  //get jobId from url, and set to -1 if null
  let jobId = useRouter().query.id?.toString();
  if(!jobId) jobId = "-1";

  //Get posting from trpc
  const posting = trpc.useQuery(["jobs.getPostingById", { id: jobId }]);

  //Get Markdown file with job description
  useEffect(() => {
    fetch("/Jobs/" + jobId + ".md").then((res) => res.text()).then((text) => {
      setDescription(text);
    });
  }, [jobId]);

  return (
  <>
    <Head>
      <title>Junior.Dev - Entry Level Jobs</title>
      <meta name="description" content="Generated by create-t3-app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {
      //display posting if it exists
      posting.data != null ? (
        <main className="bg-purple-200">
          <Search />
          <section> 
            <div className="container mx-auto mt-12 max-w-6xl bg-white text-center rounded-2xl">
              <span className="flex p-4"><BackButton /></span>
              <div className="pt-8 flex flex-col gap-4 items-center justify-center">
                <img src={posting.data?.employerImg} alt="company logo" width={128} />
                <h1 className="text-4xl font-bold">{posting.data?.title}</h1>
              </div>
              <div className="flex flex-row gap-6 text-lg justify-center py-4">
                <p>{posting.data?.employer}</p>
                <span>-</span>
                <p>{posting.data?.location}</p>
                <span>-</span>
                <p>{posting.data?.level}</p>
              </div>
              <div>
                <h2 className="py-4 text-xl font-semibold">About the Job</h2>
                <div className="sm:px-24 px-8 pb-4 prose max-w-full text-left">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{description}</ReactMarkdown>
                </div>
              </div>
              <div>
                <h2 className="py-4 text-xl font-semibold">Job Type</h2>
                <p className="sm:px-24 px-8 pb-4">{posting.data?.type}</p>
              </div>
              <div>
                <h2 className="py-4 text-xl font-semibold">Salary</h2>
                <p className="sm:px-24 px-8 pb-4">{posting.data?.salary}</p>
              </div>
              <div>
                <h2 className="py-4 text-xl font-semibold">Desired Skills</h2>
                <SkillsList skills={posting.data?.skills} />
              </div>
              <p className="pt-8 pb-4">Posted: {posting.data?.createdAt.toLocaleDateString()}</p>
            </div>
          </section>
          <div className="py-6"></div>
        </main>
      ) :
      //display 404 page if posting not found
      (
        <div className="flex bg-purple-200 justify-center h-screen">
          <div className="flex flex-col bg-white mt-24 px-24 text-center max-w-2xl max-h-64 rounded-2xl">
            <h1 className="text-9xl font-bold pt-4">404</h1>
            <h1 className="text-2xl pt-8">Posting Not Found</h1>
            <div className="pt-2 text-purple-800 font-semibold hover:text-purple-400">
              <Link href="/jobs">Return to Jobs</Link>
            </div>
          </div>
        </div>
      )
    }
  </>
  );
};

export default JobPage;

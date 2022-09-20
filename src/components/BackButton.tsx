import React from 'react';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BackButton = () => {
  return (
    <Link href="/jobs">
      <a className="bg-gray-200 p-2 rounded-lg flex gap-1 hover:bg-gray-300 hover:scale-105">
        <FontAwesomeIcon width={16} icon={faArrowLeft} /> Back to Jobs
      </a>
    </Link>
  )
}

export default BackButton
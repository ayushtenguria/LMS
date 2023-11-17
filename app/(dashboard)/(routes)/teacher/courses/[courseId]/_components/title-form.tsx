"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface TitleFormProps {
  initailData: {
    title: string;
  };
  courseId: string;
}

export const TitleForm = ({ initailData, courseId }: TitleFormProps) => {
  return <div>Title Form</div>;
};

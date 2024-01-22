import { FC } from "react";

import AdminNavigation from "@/components/ui/admin-navigation/AdminNavigation";
import Heading from "@/ui/heading/Heading";
import Statistics from "./Statistics/Statistics";

import { Meta } from "@/utils/meta/Meta";

const Admin: FC = () => {
  return (
    <Meta title="Admin panel">
      <AdminNavigation />
      <Heading title="Some statistics" />

      <Statistics />
    </Meta>
  );
};

export default Admin;

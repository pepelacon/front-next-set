import { useUserEdit } from "./useUserEdit";
import { IUserEditInput } from "./user-edit.interface";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";

import AuthFields from "@/components/shared/user/AuthFields";

import AdminNavigation from "@/ui/admin-navigation/AdminNavigation";

import Heading from "@/ui/heading/Heading";

import { Meta } from "@/utils/meta/Meta";
import Button from "@/components/ui/form-element/Button";
import SkeletonLoader from "@/components/ui/SkeletonLoader";

const UserEdit: FC = () => {
  const { handleSubmit, register, formState, setValue, control } =
    useForm<IUserEditInput>({
      mode: "onChange",
    });

  const { isLoading, onSubmit } = useUserEdit(setValue);

  return (
    <Meta title="Edit user">
      <AdminNavigation />
      <Heading title="Edit user" />
      <form onSubmit={handleSubmit(onSubmit)} className="admin-form">
        {isLoading ? (
          <SkeletonLoader count={3} />
        ) : (
          <>
            <AuthFields
              register={register}
              formState={formState}
              isPasswordRequired={false}
            />
            <Controller
              name="isAdmin"
              control={control}
              render={({ field }) => (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    field.onChange(!field.value);
                  }}
                  className="text-link block mb-7"
                >
                  {field.value ? "Make it regular user" : "Make it admin"}
                </button>
              )}
            />
          </>
        )}

        <Button>Update</Button>
      </form>
    </Meta>
  );
};

export default UserEdit;

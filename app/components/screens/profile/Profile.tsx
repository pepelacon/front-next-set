import { IProfileInput } from "./profile.interface";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { toastr } from "react-redux-toastr";

import AuthFields from "@/components/shared/user/AuthFields";

import Heading from "@/components/ui/heading/Heading";

import { UserService } from "@/services/user/user.service";

import { toastError } from "@/utils/api/withToastrErrorRedux";

import styles from "./Profile.module.scss";
import Button from "@/components/ui/form-element/Button";
import SkeletonLoader from "@/components/ui/SkeletonLoader";
import { Meta } from "@/utils/meta/Meta";

const Profile: FC = () => {
  const { handleSubmit, register, formState, setValue } =
    useForm<IProfileInput>({
      mode: "onChange",
    });

  const { isLoading } = useQuery("profile", () => UserService.getProfile(), {
    onSuccess({ data }) {
      setValue("email", data.email);
    },
    onError(error) {
      toastError(error, "Get profile");
    },
  });

  const { mutateAsync } = useMutation(
    "update profile",
    (data: IProfileInput) => UserService.updateProfile(data),
    {
      onError(error) {
        toastError(error, "Update profile");
      },
      onSuccess() {
        toastr.success("Update profile", "update was successful");
      },
    }
  );

  const onSubmit: SubmitHandler<IProfileInput> = async (data) => {
    await mutateAsync(data);
  };

  return (
    <Meta title="Profile">
      <Heading title="Profile" />
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {isLoading ? (
          <SkeletonLoader count={2} />
        ) : (
          <AuthFields
            register={register}
            formState={formState}
            isPasswordRequired={false}
          />
        )}

        <Button>Update</Button>
      </form>
    </Meta>
  );
};

export default Profile;

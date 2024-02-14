import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSettings as updateSettingsAPI } from "../../services/apiSettings";
import toast from "react-hot-toast";

export const useUpdateSettings = () => {
  const queryClient = useQueryClient();

  const { isLoading: isUpdating, mutate: updateSettings } = useMutation({
    mutationFn: updateSettingsAPI,
    onSuccess: () => {
      toast.success("Settings successfully updated");
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },
    onError: (error) => toast.error(error.message),
  });

  return { isUpdating, updateSettings };
};

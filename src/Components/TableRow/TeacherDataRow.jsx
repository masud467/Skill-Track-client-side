import toast from "react-hot-toast";
import PropTypes from "prop-types";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const TeacherDataRow = ({ user, refetch }) => {
  const { mutateAsync: approveMutation } = useMutation({
    mutationFn: async (role) => {
      const { data } = await axios.patch(
        `https://skill-track-for-server.vercel.app/user/update/${user?.email}`,
        role
      );
      return data;
    },
    onSuccess: () => {
      refetch();
      toast.success("User role updated successfully");
    },
  });

  const { mutateAsync: rejectMutation } = useMutation({
    mutationFn: async (status) => {
      const { data } = await axios.patch(
        `https://skill-track-for-server.vercel.app//user/update/${user?.email}`,
        status
      );
      return data;
    },
    onSuccess: () => {
      refetch();
      toast.success("User request rejected");
    },
  });

  // Approve handler
  const handleApprove = async () => {
    const userRole = {
      role: "teacher",
      status: "accepted",
    };

    try {
      await approveMutation(userRole);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  // Reject handler
  const handleReject = async () => {
    const userStatus = {
      status: "rejected",
    };

    try {
      await rejectMutation(userStatus);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
  // Disable buttons if status is accepted or rejected
  const isDisabled = user?.status === "accepted" || user?.status === "rejected";

  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={user?.image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{user?.name}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{user?.experience}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{user?.title}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{user?.category}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{user?.role}</p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {user?.status ? (
          <p
            className={`${
              user.status === "pending"
                ? "text-green-500"
                : user.status === "accepted"
                ? "text-blue-500"
                : "text-red-500"
            } whitespace-no-wrap`}
          >
            {user.status}
          </p>
        ) : (
          <p className="text-red-500 whitespace-no-wrap">Unavailable</p>
        )}
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button
          onClick={handleApprove}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
          disabled={isDisabled}
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">Approve</span>
        </button>
      </td>
      <td>
        <button
          onClick={handleReject}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-red-900 leading-tight"
          disabled={isDisabled}
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">Reject</span>
        </button>
      </td>
    </tr>
  );
};

TeacherDataRow.propTypes = {
  user: PropTypes.object,
  refetch: PropTypes.func,
};

export default TeacherDataRow;

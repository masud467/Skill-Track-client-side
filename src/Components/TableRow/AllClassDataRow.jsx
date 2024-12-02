import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const AllClassDataRow = ({ classItem, refetch }) => {
  const { mutateAsync: updateClassStatus } = useMutation({
    mutationFn: async (updateData) => {
      const { data } = await axios.patch(
        `https://skill-track-for-server.vercel.app/class/update/${classItem?._id}`,
        updateData
      );
      return data;
    },
    onSuccess: () => {
      refetch();
      toast.success("Class status updated successfully");
    },
  });

  const handleApprove = async () => {
    const updateData = {
      status: "accepted",
    };

    try {
      await updateClassStatus(updateData);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  const handleReject = async () => {
    const updateData = {
      status: "rejected",
    };

    try {
      await updateClassStatus(updateData);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  const isDisabled =
    classItem?.status === "accepted" || classItem?.status === "rejected";
  const isSeeProgressDisabled = classItem?.status !== "accepted";

  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={classItem?.image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{classItem?.title}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {classItem.teacher?.email}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {classItem?.description}
        </p>
      </td>
      {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">{classItem?.description}</p>
          </td> */}
      {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">{user?.role}</p>
          </td> */}

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {classItem?.status ? (
          <p
            className={`${
              classItem.status === "pending"
                ? "text-green-500"
                : classItem.status === "accepted"
                ? "text-blue-500"
                : "text-red-500"
            } whitespace-no-wrap`}
          >
            {classItem.status}
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
      <td>
        <Link to={`/dashboard/details/${classItem._id}`}>
          <button
            className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-red-900 leading-tight"
            disabled={isSeeProgressDisabled}
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
            ></span>
            <span className="relative">See progress</span>
          </button>
        </Link>
      </td>
    </tr>
  );
};

AllClassDataRow.propTypes = {
  classItem: PropTypes.object,
  refetch: PropTypes.func,
};

export default AllClassDataRow;

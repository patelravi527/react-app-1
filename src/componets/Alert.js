import React from "react";

export default function Alert(props) {
  return (
    props.alert &&
    <>
      <div className="mt-5 mx-auto fixed inset-x-0 bottom-0 w-full">
        <div className="bg-green-200 rounded-0 w-full p-5">
          <p className="block text-lg font-normal text-center text-slate-400 text-green-900">
            <strong>{props.alert.type}</strong>: {props.alert.msg}
          </p>
        </div>
      </div>
    </>
  );
}

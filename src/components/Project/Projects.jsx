import React from "react";

function Project() {
  return (
    <>
      <h1 className="py-20 pt-40 flex justify-center font-medium lg:text-5xl md:text-xl sm:text-base">
      Projects
      </h1>
      <div
        id="project"
        className="flex gap-20 card-compact justify-center"
      >
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <div className="skeleton w-full h-64"></div>
          <div className="card-body">
            <h2 className="card-title">Project 1</h2>
            <p>Coming Soon...</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Coming Soon...</button>
            </div>
          </div>
        </div>

        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <div className="skeleton w-full h-64"></div>
          <div className="card-body">
            <h2 className="card-title">Project 2</h2>
            <p>Coming Soon...</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Coming Soon...</button>
            </div>
          </div>
        </div>

        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <div className="skeleton w-full h-64"></div>
          <div className="card-body">
            <h2 className="card-title">Project 3</h2>
            <p>Coming Soon...</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Coming Soon...</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;

import { Link } from "react-router-dom";
import { Button } from "@/components/ui";

const PostDetails = () => {
  return (
    <div className="post_details-container">
      <div className="hidden md:flex max-w-5xl w-full">
        <Button
          onClick={() => ()}
          variant="ghost"
          className="shad-button_ghost">
          <img
            src={"/assets/icons/back.svg"}
            alt="back"
            width={24}
            height={24}
          />
          <p className="small-medium lg:base-medium">Back</p>
        </Button>
      </div>
        <div className="post_details-card">
          <img
            src={}
            alt="creator"
            className="post_details-img"
          />

          <div className="post_details-info">
            <div className="flex-between w-full">
              <Link
                to={}
                className="flex items-center gap-3">
                <img
                  src={}
                  alt="creator"
                  className="w-8 h-8 lg:w-12 lg:h-12 rounded-full"
                />
                <div className="flex gap-1 flex-col">
                  <p className="base-medium lg:body-bold text-light-1">
                    
                  </p>
                  <div className="flex-center gap-2 text-light-3">
                    <p className="subtle-semibold lg:small-regular ">
                    </p>
                    •
                    <p className="subtle-semibold lg:small-regular">
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="w-full">
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default PostDetails;

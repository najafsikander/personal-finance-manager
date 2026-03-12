import { FC, ReactNode } from "react";
import { BackButton } from "../ui";

type Props = {
  upperRowHeading: string;
  mainAreaHeading: string;
  icon: ReactNode;
  mainAreaDescription: ReactNode;
  mainContent: ReactNode;
};

const PageArea: FC<Props> = ({
  upperRowHeading,
  mainAreaHeading,
  icon,
  mainAreaDescription,
  mainContent,
}) => {
  return (
    <>
      {/*Main Page Area*/}
      <div className="w-2/3 text-center">
        {/*Upper Row*/}
        <div className="w-full flex justify-between items-center p-2 mb-1">
          <div className="flex justify-start items-baseline gap-2 pt-3">
            {icon}
            <h3 className="font-medium text-xl text-white mb-2">
              {upperRowHeading}
            </h3>
          </div>
          <BackButton />
        </div>

        {/*Main Area*/}
        <div className="w-full rounded-md bg-white">
          <div className="pt-2 rounded-t-md bg-slate-500"></div>
          <div className="w-full p-2 bg-white flex text-left">
            <div className="px-5 basis-1/3 mt-2">
              <h1 className="font-bold text-xl">{mainAreaHeading}</h1>
              <div className="text-sm text-gray-600 space-y-3">
                {mainAreaDescription}
              </div>
            </div>
            <div className="basis-2/3">{mainContent}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageArea;

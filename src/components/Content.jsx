import { IconBrandUnity, IconPlus } from "@tabler/icons";
import Title from "./Title";
import {useTranslation} from "react-i18next";

function Content() {
  const {t}=useTranslation();
  return (
    <main className="flex w-full flex-1 flex-col overflow-hidden">
      <div className="grid items-start gap-8">
        {/* title + button */}
        <Title title={t("title")} subtitle={t("subtitle")} />        
        {/* title + button */}
        {/* empty */}
        <div>
          <div className="flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50 ml-1 mr-4">
            <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-100">
                <IconBrandUnity size={40} stroke={1.5} />
              </div>
              <h2 className="mt-6 text-xl font-semibold">{t("content_none")}</h2>
              <p className="mt-3 mb-8 text-center text-sm font-normal leading-6 text-slate-700">
                {t("content_none_description")}
              </p>
              <button
                className="relative inline-flex h-9 items-center rounded-md border px-4 py-2 text-sm font-medium border-slate-200 bg-white text-brand-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                data-bcup-haslogintext="no"
              >
                 <IconPlus className="mr-2" size={16} strokeWidth={2} />            
               
                Imagine
              </button>
            </div>
          </div>
        </div>
        {/* empty */}
      </div>
    </main>
  );
}
export default Content;

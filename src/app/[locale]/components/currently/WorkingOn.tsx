import { useTranslations } from "next-intl";
import { Laptop } from "lucide-react";
import { WorkingProject } from "./WorkingProject";

const WorkingOn = () => {
  const t = useTranslations("Now");
  return (
    <section className="bg-white p-6 text-dark sm:p-8 rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl hover:border-pink-300">
      <div className="flex items-center mb-6">
        <Laptop className="w-8 h-8 sm:w-10 sm:h-10 mr-4" />
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-darker">
          {t("working-on-title")}
        </h2>
      </div>
      <WorkingProject
        title={t("working-on-project1-title")}
        description={t("working-on-project1-description")}
        link="https://carrerait.lat"
      />
      <WorkingProject
        title={t("working-on-project2-title")}
        description={t("working-on-project2-description")}
        link="https://github.com/aronmilenait/tech-book-notes"
      />
    </section>
  );
};

export default WorkingOn;

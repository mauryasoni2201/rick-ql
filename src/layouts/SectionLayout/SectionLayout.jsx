const SectionLayout = ({
    heading,
    headingClasses = '',
    description,
    descriptionClasses = '',
    children,
    withoutHeadingAndDescription = false,
    sectionClasses = '',
}) => {
    return (
        <section className={`section-padding ${sectionClasses}`}>
            <div className="container">
                {!withoutHeadingAndDescription && (
                    <>
                        {heading && (
                            <h1 className={`h1 ${headingClasses}`}>
                                {heading}
                            </h1>
                        )}

                        {description && (
                            <p className={`p ${descriptionClasses}`}>
                                {description}
                            </p>
                        )}
                    </>
                )}

                {children}
            </div>
        </section>
    );
};

export default SectionLayout;

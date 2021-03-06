import * as React from 'react';
import { getComponent } from '@stackbit/components';
import BaseLayoutWithSEO from './BaseLayoutWithSEO';

export default function PageLayout(props) {
    const { page, site } = props;
    const sections = page.sections || [];

    return (
        <BaseLayoutWithSEO page={page} site={site}>
            <main id="main" className="sb-layout sb-page-layout">
                {page.title && (
                    <h1 className="sr-only" data-sb-field-path="title">
                        {page.title}
                    </h1>
                )}
                {sections.length > 0 && (
                    <div data-sb-field-path="sections">
                        {sections.map((section, index) => {
                            const Component = getComponent(section.type);
                            if (!Component) {
                                throw new Error(`no component matching the page section's type: ${section.type}`);
                            }
                            return (
                                <div key={index} data-sb-field-path={`sections.${index}`}>
                                    <Component {...section} />
                                </div>
                            );
                        })}
                    </div>
                )}
            </main>
        </BaseLayoutWithSEO>
    );
}

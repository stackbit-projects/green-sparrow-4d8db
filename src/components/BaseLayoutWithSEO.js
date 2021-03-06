import * as React from 'react';
import Head from 'next/head';
import Script from 'next/script'
import classNames from 'classnames';
import _ from 'lodash';

import { getComponent } from '@stackbit/components';

export default function BaseLayoutWithSEO(props) {
    const { page, site } = props;
    const siteMeta = site?.__metadata || {};
    const pageMeta = page?.__metadata || {};
    const Header = getComponent('Header');
    const Footer = getComponent('Footer');
    const pageTitle = _.get(page, 'title');
    const seo = _.get(page, 'seo');
    const seoTitle = _.get(seo, 'title');
    const title = seoTitle ? seoTitle : [pageTitle, site.header.title].join(' | ');
    const seoDescription = _.get(seo, 'description', '');
    const seoRobots = _.get(seo, 'robots', []).join(',');
    const seoExtra = _.get(seo, 'extra', []).map((meta, index) => {
        const keyName = _.get(meta, 'keyName', 'name');
        const name = _.get(meta, 'name');
        if (!name) {
            return null;
        }
        const nameAttr = { [keyName]: name };
        const relativeUrl = _.get(meta, 'relativeUrl');
        let value = _.get(meta, 'value');
        if (!value) {
            return null;
        }
        if (relativeUrl) {
            if (!domain) {
                return null;
            }
            value = domain + withPrefix(value);
        }
        return <meta key={index} {...nameAttr} content={value} />;
    });
    return (
        <div className={classNames('sb-page', pageMeta.pageCssClasses)} data-sb-object-id={pageMeta.id}>
            <div className="sb-base sb-default-base-layout">
                <Head>
                    <title>{title}</title>
                    <meta name="description" content={seoDescription} />
                    <meta property="og:image" content="https://appartman.hu/images/og-kep.png" />
                    {!_.isEmpty(seoRobots) && <meta name="robots" content={seoRobots} />}
                    {seoExtra}
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                </Head>
                {process.env.NODE_ENV === 'production' ? <Script id='fb-script' strategy='lazyOnload'>
                    {`!function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '1387018778427597');
  fbq('track', 'PageView');
                        `}
                </Script> : null}
                {site.header && <Header {...site.header} annotationPrefix={siteMeta.id} />}
                {props.children}
                {site.footer && <Footer {...site.footer} annotationPrefix={siteMeta.id} />}
            </div>
        </div>
    );
}
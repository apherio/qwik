import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import { SideBar } from '../../components/sidebar/sidebar';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { OnThisPage } from '../../components/on-this-page/on-this-page';
import { ContentNav } from '../../components/content-nav/content-nav';
import type { RequestHandler } from '@builder.io/qwik-city';
import { CommunityNavbar } from './components/community-navbar/community-navbar';
import styles from '../docs.css?inline';

export default component$(() => {
  useStyles$(styles);

  return (
    <div class="docs fixed-header">
      <Header />
      <SideBar />
      {/* <CommunityNavbar/> */}
      <main>
        <div class="docs-container">
          <article>
            <Slot />
          </article>
          <ContentNav />
          <Footer />
        </div>
        <OnThisPage />
      </main>
    </div>
  );
});

export const onGet: RequestHandler = ({ cacheControl }) => {
  cacheControl({
    public: true,
    maxAge: 3600,
    sMaxAge: 3600,
    staleWhileRevalidate: 86400,
  });
};
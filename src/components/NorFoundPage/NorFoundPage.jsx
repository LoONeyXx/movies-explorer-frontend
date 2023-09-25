import "./NotFoundPage.css";
import LinkButton from "../LinkButton/LinkButton";
function NotFoundPage({
  message = " Страница не найдена",
  status = 404,
  onBack,
}) {
  return (
    <main className='content-not-found-page'>
      <section className='not-found-page'>
        <div className='not-found-page__title-zone'>
          <h2 className='not-found-page__title'>{status}</h2>
          <p className='not-found-page__subtitle'>{message}</p>
        </div>
        <LinkButton
          path={null}
          onLink={onBack}
          text='Назад'
        />
      </section>
    </main>
  );
}
export default NotFoundPage;

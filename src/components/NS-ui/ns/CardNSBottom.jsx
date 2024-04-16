const CardNSBottom = ({ insurType }) => {
  return (
    <div className="card-bottom">
      <article className="insurance-program-info">
        {insurType === "vip" ? (
          <a href="/download_file.html?file_id=7015428945918816824" download>
            Памятка застрахованного
          </a>
        ) : (
          <a href="/download_file.html?file_id=7015428281830694017" download>
            Памятка застрахованного
          </a>
        )}
      </article>
    </div>
  );
};
export default CardNSBottom;

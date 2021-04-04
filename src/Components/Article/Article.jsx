import React, { useContext }  from 'react';
import ArticleStyles from './Article.module.css'
import { AppContext } from '../../Context/AppContext'
import CloseIcon from '../CloseIcon/CloseIcon'
import Tag from '../Tag/Tag';
import Logo from '../Logo/Logo'
import { calculateDistance }  from '../../utils/distance'
import { calculateTimeSpan } from '../../utils/date'

const Article = () => {
  const appContext = useContext(AppContext);
  var article = appContext.selected >= 0 ? appContext.voices.rows[appContext.selected] : null;
  var resources = null;
  
  if(article && article['Location Tags']){
    resources = [];
    let resourceIndices = [];
    article['Location Tags'].forEach((location)=>{
      if(appContext['resources'][location]){
        resourceIndices = [...resourceIndices, ...appContext['resources'][location]];
      }
    });
    resourceIndices = new Set(resourceIndices);
    resourceIndices.forEach((index)=>{
      let resource = appContext.resources.rows[index];
      resources.push(<li><a href={resource.URL}>{resource.Name}</a></li>)
    })      
  }

  var articleClass;
  if (appContext.articleToggled){
    articleClass = ArticleStyles.Toggled
  }else{
    articleClass = ArticleStyles.Hidden
  }

  return ( 
    <div className={`${ArticleStyles.Container} ${articleClass}`}>
      { article &&
        <div className={ArticleStyles.ArticleContainer}>
          <div className={ArticleStyles.HeadingContainer}>
            <h2 className={ArticleStyles.Title}>
              {article.Name}
            </h2>
            <div className={ArticleStyles.Close} onClick={appContext.closeArticle}>
              <CloseIcon/>
            </div>
          </div>
          <div className={ArticleStyles.SubheadingContainer}>
            <h3 className={ArticleStyles.Subtitle}>
              {calculateTimeSpan(article.Date)} · {calculateDistance(appContext.lat, appContext.lng, article.lat, article.lng)}
            </h3>
          </div>
          <div className={ArticleStyles.TagsContainer}>
            {(article['Incident type']) && article['Incident type'].map((label)=><Tag key={label} type='Incident'>{label}</Tag>)}
            {(article['Location Tags']) && article['Location Tags'].map((label)=><Tag key={label} type='Location'>{label}</Tag>)}
          </div>
          <div className={ArticleStyles.ImageContainer}>
            {article.Image ? 
            <img className={ArticleStyles.Image} src={article.Image} alt="article image"/> :
            <div className={ArticleStyles.ImagePlaceHolder}>
              No Image Found
              <Logo lg></Logo>
            </div>}
          </div>
          <div className={ArticleStyles.SnippetContainer}>
            <p>
              { article['Snippet']}
            </p>
            <h3>
              <a href={article.URL} rel="noopener noreferrer" target="_blank">Read more on {article.Publisher}</a>
            </h3>
          </div>
          <div className={ArticleStyles.Resources}>
            <h2>
              Resources
            </h2>
            <ul>
              {resources}
            </ul>
          </div>
        </div>
      }
    </div>
   );
}
 
export default Article;
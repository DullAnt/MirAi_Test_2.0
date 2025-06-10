import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './ArticleDetail.css';

const ArticleDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const extractTitle = (html) => {
        if (!html) return 'Без названия';
        const match = html.match(/<h2>(.*?)<\/h2>/i) || html.match(/<h1>(.*?)<\/h1>/i);
        return match ? match[1] : 'Без названия';
    };

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://miraiback-production-496e.up.railway.app/api/articles/${id}`);

                if (!response.ok) {
                    throw new Error('Статья не найдена');
                }

                const data = await response.json();
                setArticle(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
    }, [id]);

    if (loading) {
        return (
            <div className="loading-container">
                <Helmet>
                    <title>Загрузка статьи | MirAI</title>
                    <meta name="description" content="Загрузка содержимого статьи" />
                </Helmet>
                <div className="loading-spinner"></div>
                <p>Загрузка статьи...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-container">
                <Helmet>
                    <title>Ошибка загрузки | MirAI</title>
                    <meta name="description" content="Произошла ошибка при загрузке статьи" />
                </Helmet>
                <h2>Ошибка</h2>
                <p>{error}</p>
                <button
                    className="back-button"
                    onClick={() => navigate(`/articles`)}
                    aria-label="Вернуться назад"
                >
                    Вернуться назад
                </button>
            </div>
        );
    }

    if (!article) {
        return (
            <div className="empty-container">
                <Helmet>
                    <title>Статья не найдена | MirAI</title>
                    <meta name="description" content="Запрошенная статья не существует" />
                </Helmet>
                <p>Статья не найдена</p>
                <button
                    className="back-button"
                    onClick={() => navigate('/articles')}
                    aria-label="Вернуться к списку статей"
                >
                    ← К списку статей
                </button>
            </div>
        );
    }

    const articleTitle = article.title || extractTitle(article.content);
    const articleDescription = article.content
        ? article.content.replace(/<[^>]+>/g, '').substring(0, 160)
        : 'Читайте статью на нашем сайте';

    return (
        <div className="article-detail" itemScope itemType="https://schema.org/Article">
            <Helmet>
                <title>{articleTitle} | MirAI</title>
                <meta name="description" content={articleDescription} />
                <meta name="keywords" content={article.tags?.join(', ') || 'статья'} />
                <link rel="canonical" href={`${window.location.origin}/article/${id}`} />

                {/* OpenGraph мета-теги */}
                <meta property="og:title" content={`${articleTitle} | MirAI`} />
                <meta property="og:description" content={articleDescription} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`${window.location.origin}/article/${id}`} />
                {article.imageUrl && <meta property="og:image" content={article.imageUrl} />}

                {/* Twitter мета-теги */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${articleTitle} | MirAI`} />
                <meta name="twitter:description" content={articleDescription} />
            </Helmet>

            <div className="article-content-wrapper">
                <h1 itemProp="headline">{articleTitle}</h1>

                <div className="article-meta">
                    <span className="date" itemProp="datePublished">
                        {new Date(article.dateCreated).toLocaleDateString('ru-RU', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </span>
                    {article.author && (
                        <span itemProp="author" itemScope itemType="https://schema.org/Person">
                            <span itemProp="name">{article.author}</span>
                        </span>
                    )}
                </div>

                {article.imageUrl && (
                    <img
                        src={article.imageUrl}
                        alt={article.imageAlt || articleTitle}
                        className="detail-image"
                        itemProp="image"
                        loading="lazy"
                        width="800"
                        height="450"
                    />
                )}

                <div
                    className="article-content"
                    dangerouslySetInnerHTML={{ __html: article.content || '' }}
                    itemProp="articleBody"
                />
            </div>

            {/* Schema.org разметка */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": articleTitle,
                    "description": articleDescription,
                    "datePublished": article.dateCreated,
                    "author": article.author ? {
                        "@type": "Person",
                        "name": article.author
                    } : undefined,
                    "image": article.imageUrl,
                    "publisher": {
                        "@type": "Organization",
                        "name": "MirAI",
                        "logo": {
                            "@type": "ImageObject",
                            "url": `${window.location.origin}/logo.png`
                        }
                    }
                })}
            </script>

            <button
                className="back-button"
                onClick={() => navigate(`/articles`)}
                aria-label="Назад к статьям"
            >
                Назад к статьям
            </button>
        </div>
    );
};

export default ArticleDetail;
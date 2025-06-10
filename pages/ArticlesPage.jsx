import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Добавлен импорт Link
import { Helmet } from 'react-helmet';
import './ArticlesPage.css';

const ArticlesPage = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const API_URL = 'https://miraiback-production-496e.up.railway.app/api/articles';
    const navigate = useNavigate();

    useEffect(() => {
        const animateElements = () => {
            const cards = document.querySelectorAll('.article-card');
            cards.forEach(card => {
                const cardPosition = card.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (cardPosition < windowHeight - 100) {
                    card.classList.add('animate');
                }
            });
        };

        const fetchArticles = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch(API_URL);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setArticles(data);

                setTimeout(() => {
                    animateElements();
                    window.addEventListener('scroll', animateElements);
                }, 100);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();

        return () => {
            window.removeEventListener('scroll', animateElements);
        };
    }, []);

    const extractTitle = (html) => {
        if (!html) return 'Без названия';
        const match = html.match(/<h2>(.*?)<\/h2>/i) || html.match(/<h1>(.*?)<\/h1>/i);
        return match ? match[1] : 'Без названия';
    };

    const truncateHtml = (html = '', maxLength = 300) => {
        if (html.length <= maxLength) return html;
        const truncated = html.substring(0, maxLength);
        const lastTag = truncated.lastIndexOf('</');
        return lastTag > 0 ? truncated.substring(0, lastTag) + '...' : truncated + '...';
    };

    const formatDate = (dateString) => {
        try {
            if (!dateString) return 'Дата не указана';
            const date = new Date(dateString);
            return isNaN(date) ? dateString : date.toLocaleDateString('ru-RU', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        } catch {
            return dateString;
        }
    };

    if (loading) {
        return (
            <div className="loading-container">
                <Helmet>
                    <title>Загрузка статей | MirAI</title>
                    <meta name="description" content="Загрузка списка статей" />
                </Helmet>
                <div className="loading-spinner"></div>
                <p>Загрузка статей...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-container">
                <Helmet>
                    <title>Ошибка загрузки | MirAI</title>
                    <meta name="description" content="Произошла ошибка при загрузке статей" />
                </Helmet>
                <h2>Ошибка загрузки</h2>
                <p>{error}</p>
                <button onClick={() => window.location.reload()}>Попробовать снова</button>
            </div>
        );
    }

    if (!articles.length) {
        return (
            <div className="empty-container">
                <Helmet>
                    <title>Статьи не найдены | MirAI</title>
                    <meta name="description" content="Нет доступных статей для отображения" />
                </Helmet>
                <p>Статьи не найдены</p>
                <p>Попробуйте обновить страницу или зайти позже</p>
                <button onClick={() => window.location.reload()}>Обновить страницу</button>
            </div>
        );
    }

    return (
        <div className="articles-page">
            <Helmet>
                <title>Последние статьи | MirAI</title>
                <meta name="description" content="Актуальные статьи и публикации на различные темы" />
                <meta name="keywords" content="статьи, публикации, материалы, блог" />
                <link rel="canonical" href={`${window.location.origin}/articles`} />

                {/* OpenGraph мета-теги */}
                <meta property="og:title" content="Последние статьи | MirAI" />
                <meta property="og:description" content="Актуальные статьи и публикации на различные темы" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${window.location.origin}/articles`} />

                {/* Twitter мета-теги */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Последние статьи | MirAI" />
                <meta name="twitter:description" content="Актуальные статьи и публикации на различные темы" />
            </Helmet>

            <h1>Последние статьи</h1>
            <div className="articles-list">
                {articles.map(article => (
                    <article key={article.id} className="article-card" itemScope itemType="https://schema.org/Article">
                        <h2 itemProp="headline">
                            <Link to={`/article/${article.id}`} itemProp="url">
                                {extractTitle(article.content)}
                            </Link>
                        </h2>
                        <p className="article-date" itemProp="datePublished">
                            {formatDate(article.dateCreated)}
                        </p>

                        {article.imageUrl && (
                            <div className="image-container">
                                <img
                                    src={article.imageUrl}
                                    alt={article.imageAlt || extractTitle(article.content)}
                                    className="article-image"
                                    itemProp="image"
                                    onError={(e) => e.target.style.display = 'none'}
                                    loading="lazy"
                                />
                            </div>
                        )}

                        <div
                            className="article-content"
                            dangerouslySetInnerHTML={{ __html: truncateHtml(article.content) }}
                            itemProp="description"
                        />

                        <button
                            className="read-more"
                            onClick={() => navigate(`/article/${article.id}`)}
                            aria-label={`Читать статью "${extractTitle(article.content)}" полностью`}
                        >
                            Читать полностью
                        </button>
                    </article>
                ))}
            </div>

            {/* Schema.org разметка */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "ItemList",
                    "itemListElement": articles.map((article, index) => ({
                        "@type": "ListItem",
                        "position": index + 1,
                        "item": {
                            "@type": "Article",
                            "headline": extractTitle(article.content),
                            "url": `${window.location.origin}/article/${article.id}`,
                            "datePublished": article.dateCreated,
                            "description": truncateHtml(article.content, 160)
                        }
                    }))
                })}
            </script>
        </div>
    );
};

export default ArticlesPage;
import { Composition } from 'remotion';
import RemotionComposition from './../app/_components/RemotionComposition';

const videoData = {
    audioUrl: '',
    captionJson: [
        {
            confidence: 0.97760844,
            end: 0.88,
            start: 0.39999998,
            word: "ignite",
        },
        {
            confidence: 0.988561,
            end: 1.12,
            start: 0.88,
            word: "your",
        },
        {
            confidence: 0.9910556,
            end: 1.52,
            start: 1.12,
            word: "child's",
        },
        {
            confidence: 0.9986344,
            end: 2,
            start: 1.52,
            word: "imagination",
        },
        {
            confidence: 0.9990589,
            end: 2.32,
            start: 2,
            word: "with",
        },
        {
            confidence: 0.9987998,
            end: 2.48,
            start: 2.32,
            word: "our",
        },
        {
            confidence: 0.9238084,
            end: 3.1999998,
            start: 2.48,
            word: "stories",
        },
        {
            confidence: 0.97646785,
            end: 3.4399998,
            start: 3.1999998,
            word: "from",
        },
        {
            confidence: 0.99476004,
            end: 3.76,
            start: 3.4399998,
            word: "thrilling",
        },
        {
            confidence: 0.9996335,
            end: 4.24,
            start: 3.76,
            word: "mysteries",
        },
        {
            confidence: 0.9873032,
            end: 4.48,
            start: 4.24,
            word: "to",
        },
        {
            confidence: 0.98636264,
            end: 4.88,
            start: 4.48,
            word: "fantasy",
        },
        {
            confidence: 0.8847541,
            end: 5.6,
            start: 4.88,
            word: "adventures",
        },
        {
            confidence: 0.9797347,
            end: 5.68,
            start: 5.6,
            word: "we",
        },
        {
            confidence: 0.9996859,
            end: 5.8399997,
            start: 5.68,
            word: "have",
        },
        {
            confidence: 0.9995572,
            end: 6,
            start: 5.8399997,
            word: "it",
        },
        {
            confidence: 0.8797293,
            end: 6.48,
            start: 6,
            word: "all",
        },
        {
            confidence: 0.98867875,
            end: 6.72,
            start: 6.48,
            word: "each",
        },
        {
            confidence: 0.99088985,
            end: 7.04,
            start: 6.72,
            word: "tale",
        },
        {
            confidence: 0.99915385,
            end: 7.44,
            start: 7.04,
            word: "promises",
        },
        {
            confidence: 0.9987286,
            end: 7.6,
            start: 7.44,
            word: "a",
        },
        {
            confidence: 0.9989825,
            end: 7.8399997,
            start: 7.6,
            word: "new",
        },
        {
            confidence: 0.8782984,
            end: 8.48,
            start: 7.8399997,
            word: "journey",
        },
        {
            confidence: 0.9965137,
            end: 9.04,
            start: 8.48,
            word: "adventures",
        },
        {
            confidence: 0.8250804,
            end: 9.679999,
            start: 9.04,
            word: "await",
        },
        {
            confidence: 0.98309004,
            end: 9.76,
            start: 9.679999,
            word: "we",
        },
        {
            confidence: 0.99928623,
            end: 10.08,
            start: 9.76,
            word: "offer",
        },
        {
            confidence: 0.99956316,
            end: 10.4,
            start: 10.08,
            word: "stories",
        },
        {
            confidence: 0.97523403,
            end: 10.639999,
            start: 10.4,
            word: "that",
        },
        {
            confidence: 0.9918216,
            end: 10.719999,
            start: 10.639999,
            word: "are",
        },
        {
            confidence: 0.9995871,
            end: 11.12,
            start: 10.719999,
            word: "suitable",
        },
        {
            confidence: 0.9998105,
            end: 11.36,
            start: 11.12,
            word: "for",
        },
        {
            confidence: 0.9985886,
            end: 11.599999,
            start: 11.36,
            word: "all",
        },
        {
            confidence: 0.9152776,
            end: 12.24,
            start: 11.599999,
            word: "kids",
        },
        {
            confidence: 0.9845583,
            end: 12.48,
            start: 12.24,
            word: "where",
        },
        {
            confidence: 0.97910815,
            end: 12.799999,
            start: 12.48,
            word: "every",
        },
        {
            confidence: 0.9992378,
            end: 13.04,
            start: 12.799999,
            word: "story",
        },
        {
            confidence: 0.9994837,
            end: 13.28,
            start: 13.04,
            word: "is",
        },
        {
            confidence: 0.9995085,
            end: 13.44,
            start: 13.28,
            word: "an",
        },
        {
            confidence: 0.8641003,
            end: 14.08,
            start: 13.44,
            word: "adventure",
        },
        {
            confidence: 0.9293749,
            end: 14.32,
            start: 14.08,
            word: "find",
        },
        {
            confidence: 0.9969337,
            end: 14.559999,
            start: 14.32,
            word: "your",
        },
        {
            confidence: 0.9983006,
            end: 14.799999,
            start: 14.559999,
            word: "next",
        },
        {
            confidence: 0.9594364,
            end: 15.12,
            start: 14.799999,
            word: "favorite",
        },
        {
            confidence: 0.99816304,
            end: 15.28,
            start: 15.12,
            word: "on",
        },
        {
            confidence: 0.9992555,
            end: 15.44,
            start: 15.28,
            word: "our",
        },
        {
            confidence: 0.94771564,
            end: 15.839999,
            start: 15.44,
            word: "website",
        },
    ],
    images: ['https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg']
}

export const RemotionRoot = () => {
    return (
        <>
            <Composition
                id="youtubeShort"
                component={RemotionComposition}
                durationInFrames={Number((videoData?.captionJson[videoData?.captionJson?.length - 1]?.end * 30).toFixed(0))}
                fps={30}
                width={1280}
                height={720}
                defaultProps={{
                    videoData: videoData
                }}
            />
        </>
    );
};
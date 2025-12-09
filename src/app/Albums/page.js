import React from "react";
import Link from "next/link";

export default function AlbumPage() {
    return (
        <div>
            <main>
            <Link href="/Albums/AllWeKnowIsFalling">
    <button>Go to All We Know Is Falling</button>
  </Link>
                 <Link href='/Albums/Riot'>
                    <button>Go to Riot</button>
                </Link>
                <Link href='/Albums/BrandNewEyes'>
                    <button>Go to Brand New Eyes</button>
                </Link>
                 <Link href='/Albums/Paramore'>
                    <button>Go to Paramore</button>
                </Link>
                 <Link href='/Albums/AfterLaughter'>
                    <button>Go to After Laughter</button>
                </Link>
                 <Link href='/Albums/ThisisWhy'>
                    <button>Go to This is Why</button>
                </Link>
            </main>
        </div>
    );
}
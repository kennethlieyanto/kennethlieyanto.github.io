import type { Route } from "./+types/font-example";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Font Example" },
        { name: "description", content: "Example usage of Geist Mono font" },
    ];
}

export default function FontExample() {
    return (
        <div className="p-8 space-y-6">
            <h1 className="text-3xl font-bold">Font Examples</h1>

            <div className="space-y-4">
                <div>
                    <h2 className="text-xl font-semibold mb-2">
                        Default Sans Font (Inter)
                    </h2>
                    <p className="text-lg">
                        This uses the default Inter font family.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-2">
                        Monospace Font (Geist Mono)
                    </h2>
                    <p className="text-lg font-mono">
                        This text uses Geist Mono font.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-2">
                        Code Block Example
                    </h2>
                    <pre className="font-mono bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                        <code>
                            {`function greet(name: string) {
  return \`Hello, \${name}!\`;
}`}
                        </code>
                    </pre>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-2">
                        Inline Code Example
                    </h2>
                    <p>
                        Here's some{" "}
                        <code className="font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">
                            inline code
                        </code>{" "}
                        using Geist Mono.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-2">
                        Different Weights
                    </h2>
                    <div className="space-y-2">
                        <p className="font-mono font-thin">
                            Geist Mono Thin (100)
                        </p>
                        <p className="font-mono font-light">
                            Geist Mono Light (300)
                        </p>
                        <p className="font-mono font-normal">
                            Geist Mono Regular (400)
                        </p>
                        <p className="font-mono font-medium">
                            Geist Mono Medium (500)
                        </p>
                        <p className="font-mono font-semibold">
                            Geist Mono Semibold (600)
                        </p>
                        <p className="font-mono font-bold">
                            Geist Mono Bold (700)
                        </p>
                        <p className="font-mono font-extrabold">
                            Geist Mono Extrabold (800)
                        </p>
                        <p className="font-mono font-black">
                            Geist Mono Black (900)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


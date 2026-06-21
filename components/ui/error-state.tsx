interface ErrorStateProps {
  message?: string;
}

export default function ErrorState({
  message = "Something went wrong",
}: ErrorStateProps) {
  return (
    <div className="flex min-h-[300px] items-center justify-center">
      <div className="rounded-xl border p-6 text-center">
        <h2 className="text-xl font-semibold text-red-500">
          Error
        </h2>

        <p className="mt-2 text-muted-foreground">
          {message}
        </p>
      </div>
    </div>
  );
}
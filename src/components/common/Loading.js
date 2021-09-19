const Loading = ({ length = 5 }) => {
  const a = new Array(length).fill(0);
  return (
    <div>
      {a.map((_, i) => {
        return (
          <div key={i} class="border-b border-purple-100 rounded-md p-3 w-full">
            <div class="animate-pulse flex space-x-4">
              <div class="flex-1 space-y-4 py-1">
                <div class="space-y-2">
                  <div class="h-4 bg-purple-200 rounded w-3/6"></div>
                  <div class="h-4 bg-purple-200 rounded"></div>
                  <div class="h-4 bg-purple-200 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Loading;

export function PartnerDetailsSk() {
  return (
    <div className="animate-pulse space-y-5">
      {/* Header */}
      <div className="border-b border-borderColor pb-3">
        <div className="h-6 w-40 bg-gray-200 rounded"></div>
        <div className="h-3 w-64 bg-gray-200 rounded mt-2"></div>
      </div>

      {/* Content */}
      <div className="space-y-8">
        {/* Partner Information */}
        <div>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <div className="h-3 w-24 bg-gray-200 rounded mb-2"></div>
              <div className="h-5 w-40 bg-gray-200 rounded"></div>
            </div>

            <div>
              <div className="h-3 w-16 bg-gray-200 rounded mb-2"></div>
              <div className="h-5 w-36 bg-gray-200 rounded"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <div className="h-3 w-16 bg-gray-200 rounded mb-2"></div>
              <div className="h-5 w-48 bg-gray-200 rounded"></div>
            </div>

            <div>
              <div className="h-3 w-20 bg-gray-200 rounded mb-2"></div>
              <div className="h-5 w-32 bg-gray-200 rounded"></div>
            </div>
          </div>

          <div className="flex items-center justify-between max-w-80">
            <div className="h-3 w-16 bg-gray-200 rounded"></div>
            <div className="h-5 w-20 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200" />

        {/* Revenue & Commission */}
        <div>
          <div className="h-5 w-40 bg-gray-200 rounded mb-4"></div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="h-3 w-24 bg-gray-200 rounded mb-2"></div>
              <div className="h-7 w-24 bg-gray-300 rounded"></div>
            </div>

            <div>
              <div className="h-3 w-24 bg-gray-200 rounded mb-2"></div>
              <div className="h-7 w-16 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200" />

        {/* Commission Settings */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="h-5 w-44 bg-gray-200 rounded"></div>
            <div className="h-8 w-32 bg-gray-300 rounded-lg"></div>
          </div>

          <div>
            <div className="h-3 w-36 bg-gray-200 rounded mb-3"></div>
            <div className="h-10 w-full bg-gray-200 rounded-lg"></div>
            <div className="h-3 w-48 bg-gray-200 rounded mt-2"></div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 pt-4 flex justify-end gap-3">
        <div className="h-10 w-24 bg-gray-200 rounded-lg"></div>
        <div className="h-10 w-32 bg-gray-300 rounded-lg"></div>
      </div>
    </div>
  );
}

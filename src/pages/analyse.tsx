import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export function AnalysePage() {
  return (
    <div className="min-h-[calc(100vh-3rem)]">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="w-full justify-start border-b rounded-none h-auto p-0">
          <TabsTrigger 
            value="overview"
            className="px-6 py-4 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:shadow-none rounded-none"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger 
            value="acquisition"
            className="px-6 py-4 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:shadow-none rounded-none"
          >
            Acquisition
          </TabsTrigger>
          <TabsTrigger 
            value="activation"
            className="px-6 py-4 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:shadow-none rounded-none"
          >
            Activation
          </TabsTrigger>
          <TabsTrigger 
            value="retention"
            className="px-6 py-4 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:shadow-none rounded-none"
          >
            Retention
          </TabsTrigger>
          <TabsTrigger 
            value="conversion"
            className="px-6 py-4 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:shadow-none rounded-none"
          >
            Conversion
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="flex items-center justify-center">
            <h1 className="text-4xl font-bold">Overview Content</h1>
          </div>
        </TabsContent>
        <TabsContent value="acquisition">
          <div className="flex items-center justify-center">
            <h1 className="text-4xl font-bold">Acquisition Content</h1>
          </div>
        </TabsContent>
        <TabsContent value="activation">
          <div className="flex items-center justify-center">
            <h1 className="text-4xl font-bold">Activation Content</h1>
          </div>
        </TabsContent>
        <TabsContent value="retention">
          <div className="flex items-center justify-center">
            <h1 className="text-4xl font-bold">Retention Content</h1>
          </div>
        </TabsContent>
        <TabsContent value="conversion">
          <div className="flex items-center justify-center">
            <h1 className="text-4xl font-bold">Conversion Content</h1>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
